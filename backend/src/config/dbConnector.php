<?php
    class databaseConnector{
        // Properties
        private $dbhost = 'localhost';
        private $dbuser = 'ngoappuser';
        private $dbpass = 't6C=bdQ(Mr{%';
        // private $dbuser = 'cpses_h86fPKJkvY';
        // private $dbpass = 'Aw@kenY0u';
        private $dbname = 'ngoapp';

        // Connect
        public function connect(){
            $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";
            $dbConnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);
            $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $dbConnection;
        }
    }