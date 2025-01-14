const qrFormEl = document.getElementById("qrForm");
        const qrImageEl = document.getElementById("qrImage");
        const qrContainerEl = document.getElementById("qrContainer");
        const loadingEl = document.getElementById("loading");

        const renderQRCode = (url) => {
            if (!url) return;
            qrImageEl.src = url;
            qrImageEl.onload = () => {
                loadingEl.classList.remove('show');
                qrContainerEl.classList.add('show');
            };
        };

        qrFormEl.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(qrFormEl);
            const text = formData.get("qrText");
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

            qrContainerEl.classList.remove('show');
            loadingEl.classList.add('show');

            renderQRCode(qrCodeUrl);
        });