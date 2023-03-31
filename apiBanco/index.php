<?php
include './registrar.php';
header('Acces-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['id'])) {
        $query = "select * from cuentas where id=" . $_GET['id'];
        $resultado = metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    } else {
        $query = "select * from cuentas";
        $resultado = metodoGet($query);
        echo json_encode($resultado->fetchALL());
    }
    header("HTTP/1.1 200 OK");
    exit();
}

if ($_REQUEST['METHOD'] == 'POST') {
    unset($_REQUEST['METHOD']);
    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];
    $query = "insert into cuentas(usuario,contraseña) values('$usuario','$contraseña')";
    $queryAutoIncrement = "select MAX(id) as id from cuentas";
    $resultado = metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}


if ($_REQUEST['METHOD'] == 'PUT') {
    unset($_REQUEST['METHOD']);
    $id=$_GET['id'];
    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];
    $query = "UPDATE cuentas SET usuario = '$usuario', contraseña = '$contraseña' WHERE id='$id'";
    $resultado = metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if ($_REQUEST['METHOD'] == 'DELETE') {
    unset($_REQUEST['METHOD']);
    $id=$_GET['id'];
    $query = "DELETE FROM cuentas WHERE id='$id'";
    $resultado = metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request")


?>