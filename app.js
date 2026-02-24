// Intercom Pulse P2P Extension
const sidechannel = intercom.sidechannel('pulse-stream');

// Listen for High-Priority pulses from other agents
sidechannel.on('message', (msg) => {
    const data = JSON.parse(msg.toString());
    if (data.priority === 'whale') {
        console.log(`🚀 ALERT: Peer detected a high-value lead: ${data.user}`);
        // Logic to automatically assign agent resources
    }
});

// Function to broadcast a pulse
function emitPulse(type, detail) {
    sidechannel.broadcast(JSON.stringify({
        version: "1.0.0",
        type: type,
        detail: detail,
        sender: "Pulse-Agent-01"
    }));
}
