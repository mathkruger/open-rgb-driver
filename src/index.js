import { Client } from "openrgb-sdk";
import { Colors } from "./utils/colors.js";

async function start() {
    const client = new Client("T-DAGGER BORA 2", 6742, "localhost");
	
	await client.connect();

    const device_0 = await client.getControllerData(0);

    await client.updateMode(0, device_0.modes[0].id);

    const colors = Array(device_0.colors.length).fill(Colors.getCorrectColor({
        hex: "#04753b"
    }));
	
	console.log(`Setting the color of ${device_0.name}`)
	await client.updateLeds(device_0.deviceId, colors)

	await client.disconnect();
}

start();