package com.shaunhaldane.shaunhaldanebloginitializr.exception;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.shaunhaldane.shaunhaldanebloginitializr.model.ErrorDTO;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	
    public ResponseEntity<?> MapValidationErrors(BindingResult result) {
        if(result.hasErrors()){

            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String,String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        return null;
    }
    
	@ExceptionHandler(UserExistsException.class)
	public ResponseEntity<ErrorDTO> handleUserExistsException(UserExistsException ex, WebRequest request) {
		
		ErrorDTO errorDTO = new ErrorDTO();
		
		errorDTO.setStatusCode(HttpStatus.CONFLICT.value());
		
		errorDTO.setMessage(ex.getMessage());
		
		errorDTO.setTimestamp(new Date());
		
		return new ResponseEntity<ErrorDTO>(errorDTO, HttpStatus.CONFLICT);
	}

}

