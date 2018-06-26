<?php
    

    class STATUS {
        public static $_C_SUCCESS = 0;
        public static $_C_PDOEXCEPTION = 01;
        public static $_C_GENERAL_EXCEPTION = 02;
        public static $_C_LOGIN_FAILURE = 1;
        public static $_C_SIGNUP_FAILURE_INPUT_UNAVAILABLE= 2;
        public static $_C_USER_UPDATE_FIELD_UNAVAILABLE = 4;
        public static $_C_SIGNIN_FAILURE_INPUT_UNAVAILABLE = 7;
        public static $_C_SIGNIN_FAILURE_INVALID_CRED = 9;
        public static $_C_SIGNUP_USERNAME_NOT_AVAILABLE = 13;
        public static $_C_RESOURCE_INPUT_UNAVAILABLE = 10;
        public static $_C_RESOURCE_ADD_FAILURE = 11;
        // public static $ = ;
        // public static $ = ;

        public static $_M_SUCCESS_UPDATED = "Updated Successfully";
        public static $_M_SUCCESS_SIGNUP = "Signed up Successfully";
        public static $_M_SUCCESS_SIGNIN ="Sign In Successfully" ;
        public static $_M_SUCCESS_ADDED ="Added Successfully" ;
        public static $_M_SUCCESS_DELETE ="Deleted Successfully" ;
        public static $_M_SUCCESS_POSTED ="Posted Successfully" ;

        public static $_M_PDOEXCEPTION = "PDOException: ";
        public static $_M_GENERAL_EXCEPTION = "GeneralException: ";
        public static $_M_INPUT_UNAVAILABLE = "Input Unavailable";
        public static $_M_SIGNIN_FAILURE_INVALID_CRED = "Invalid Login Credentials";
        public static $_M_ADDING_FAILURE = "ADD FAILURE";
        public static $_M_SIGNUP_USERNAME_NOT_AVAILABLE = "Username Already Present";
        public static $_M_SIGNUP_USERNAME_AVAILABLE = "Username Available";
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
    } 

   