<?php

    class STATUS {
        public static $_C_SUCCESS = 0;
        public static $_C_LOGIN_FAILURE = 1;
        public static $_C_SIGNUP_FAILURE_INPUT_UNAVAILABLE= 2;
        public static $_C_SIGNUP_FAILURE_PDOEXCEPTION= 3;
        public static $_C_USER_UPDATE_FIELD_UNAVAILABLE = 4;
        public static $_C_USER_UPDATE_FAILURE_PDOEXCEPTION = 5;
        public static $_C_SECURITY_QUES_PDOEXCEPTION = 6;
        public static $_C_SIGNIN_FAILURE_INPUT_UNAVAILABLE = 7;
        public static $_C_SIGNIN_FAILURE_PDOEXCEPTION = 8;
        public static $_C_SIGNIN_FAILURE_INVALID_CRED = 9;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;

        public static $_M_SUCCESS_USER_UPDATED = "Updated Successfully";
        public static $_M_SUCCESS_SIGNUP = "Signed up Successfully";
        public static $_M_SUCCESS_SIGNIN ="Sign In Successfully" ; 

        public static $_M_SIGNUP_FAILURE_INPUT_UNAVAILABLE = "Input Unavailable";
        public static $_M_SIGNUP_FAILURE_PDOEXCEPTION = "PDOException: ";
        public static $_M_USER_UPDATE_FIELD_UNAVAILABLE = "Some fields required";
        public static $_M_USER_UPDATE_FAILURE_PDOEXCEPTION = "PDOException: ";
        public static $_M_SECURITY_QUES_PDOEXCEPTION = "PDOException: ";
        public static $_M_SIGNIN_FAILURE_INPUT_UNAVAILABLE = "Input Unavailable";
        public static $_M_SIGNIN_FAILURE_PDOEXCEPTION = "PDOException: ";
        public static $_M_SIGNIN_FAILURE_INVALID_CRED = "Invalid Login Credentials";
        // public static $ = ;
        // public static $ = ;
        // public static $ = ;
    } 
     