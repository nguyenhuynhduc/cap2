<?php
class education{
    private $idPark;
    private $namePark;
    private $price;
    private $city;
    private $lat;
    private $lng;
    private $conn;
    private $tableName = "park";
    function setIdPark($idPark) { $this->idPark = $idPark; }
    function getIdPark() { return $this->idPark; }
    function setNamePark($namePark) { $this->namePark = $namePark; }
    function getNamePark() { return $this->namePark; }
    function setPrice($price) { $this->price = $price; }
    function getPrice() { return $this->price; }
    function setcity($city) { $this->city = $city; }
    function getcity() { return $this->city; }
    function setLat($lat) { $this->lat = $lat; }
    function getLat() { return $this->lat; }
    function setLng($lng) { $this->lng = $lng; }
    function getLng() { return $this->lng; }
    public function __construct( )
    {
        require_once('db/DbConnect.php');
        $conn = new DbConnect;
        $this->conn = $conn->connect();
    }
    public function getCollegesBlankLatLng()
    {
        $sql= "SELECT * FROM $this->tableName WHERE city='Da Nang'";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getAllColleges($city)
    {
        $sql= "SELECT * FROM $this->tableName WHERE city='$city'";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>