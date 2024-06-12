# Create Wi-Fi Hotspot with Node.js

This repository contains a Node.js script to set up and start a Wi-Fi hotspot on a Windows machine using the `netsh` command.

## Prerequisites

- Node.js installed on your machine.
- A Windows machine with a wireless network adapter that supports hosted networks.
- Administrative privileges to run the script.

## Usage

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/nivindulakshitha/adhoc-network.git
    cd adhoc-network
    ```

2. **Install Dependencies**:
    This script uses the `child_process` module, which is built into Node.js, so no additional dependencies are required.

3. **Update SSID and Password**:
    Open the `app.js` file and update the `ssid` and `password` variables with your desired network name and password.

    ```javascript
    const ssid = 'your-ssid'; // Name of the network
    const password = 'your-password'; // Password of the network
    ```

4. **Run the Script**:
    Execute the script using Node.js:

    ```sh
    node createHotspot.js
    ```

## Script Explanation

The script uses Node.js to execute a PowerShell command that configures and starts a Wi-Fi hotspot. Here is a breakdown of what each part does:

1. **Import the `exec` function**:
    ```javascript
    const { exec } = require('child_process');
    ```

2. **Define SSID and Password**:
    ```javascript
    const ssid = 'your-ssid'; // Name of the network
    const password = 'your-password'; // Password of the network
    ```

3. **Construct the Command**:
    ```javascript
    const command = `powershell -Command "Start-Process cmd -ArgumentList '/c netsh wlan set hostednetwork mode=allow ssid=\\"${ssid}\\" key=${password} & netsh wlan start hostednetwork' -Verb runAs"`;
    ```

4. **Execute the Command**:
    ```javascript
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
    ```

## Important Considerations

- **Permissions**: Running commands to change network settings usually requires administrative privileges. The `-Verb runAs` part of the command is intended to handle this, but depending on your system's configuration, you might need to approve a User Account Control (UAC) prompt.
- **Security**: Hardcoding the password in the script is not secure. For a production environment, consider using a more secure method to handle credentials.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
