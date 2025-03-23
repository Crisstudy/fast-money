document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = document.getElementById("cadastroForm");
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const CPF = document.getElementById("cpf").value;
    const endereco = document.getElementById("end").value;
    const cep = document.getElementById("cep").value;

    const data = { name, email, telefone, CPF, endereco, cep };

    try {
        const response = await fetch("https://api-5bx1.onrender.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

            const result = await response.json();
            alert(result.message);

            // Limpa o formulário após o envio
            form.reset();

        } catch (error) {
            alert("Erro ao enviar dados: " + error.message);
        }
    });

    // Função para baixar os dados cadastrados
    async function downloadData() {
        try {
            const response = await fetch("https://api-5bx1.onrender.com/download");
            const data = await response.json();
            console.log("Dados baixados:", data);
        } catch (error) {
            alert("Erro ao baixar os dados: " + error.message);
        }
    }

     // Função para resetar os dados cadastrados
     async function resetData() {
        try {
            const response = await fetch("https://api-5bx1.onrender.com/reset");
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert("Erro ao resetar os dados: " + error.message);
        }
     } 