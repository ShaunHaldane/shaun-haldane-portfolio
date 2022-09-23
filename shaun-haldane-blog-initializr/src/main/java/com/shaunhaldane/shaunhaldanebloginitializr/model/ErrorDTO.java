package com.shaunhaldane.shaunhaldanebloginitializr.model;

import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ErrorDTO {
	
	private Integer statusCode;
	
	private String message;
	
	private Date timestamp;
	
}
