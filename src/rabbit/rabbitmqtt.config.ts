import amqp from "amqplib";
import dotenv from "dotenv";

dotenv.config();

const config = {
  protocol: "amqp",
  hostname: "3.228.161.219",
  username: "guest",
  password: "guest",
};

export async function connectToRabbitMQ() {
  try {
    const conn = await amqp.connect(config);
    console.log("Conexion a RabbitMQ exitosa");
    return conn.createChannel();
  } catch (error) {
    console.log("Error al conectar con RabbitMQ", error);
    throw error;
  }
}
