import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const QrScanner = () => {
    const [scanRes , setScanRes] = useState(null);
    useEffect(() => {
        const Scanner = new Html5QrcodeScanner("reader" , {
            qrbox: {
                width : 210,
                height : 210,
            },
            fps : 5,
        });
    
        Scanner.render(success , error);
    
        function success (result) {
            Scanner.html5Qrcode.stop()
            .then((ignore) => {
                // QR Code scanning is stopped.
                setScanRes(result);
            })
            .catch((err) => {
                console.warn("error in Stopping the camera" , err);
            });
        }
        
    
        function error (err) {
            console.warn("error in Sacnning" , err);
        }
    }, []);

    return (
        <div>
            {
                scanRes
                ? <div> Success : <a href={scanRes}>{scanRes}</a></div>
                : <div id="reader"></div>
            }
        </div>
    )
}

export default QrScanner;
