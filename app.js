const { exec } = require('child_process');

const ssid = 'MyAdHocNetwork'; // Name of the network
const password = 'MyPassword'; // Password of the network

const command = `powershell -Command "Start-Process cmd -ArgumentList '/c netsh wlan set hostednetwork mode=allow ssid=${ssid} key=${password} & netsh wlan start hostednetwork' -Verb runAs"`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${command}\n${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
