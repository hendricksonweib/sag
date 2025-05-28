// Função para popular o seletor de escolas
async function populateSchoolSelector() {
    const schoolSelect = document.getElementById("linkSchool");
    if (!schoolSelect) return;
    
    try {
        // Mostrar indicador de carregamento
        schoolSelect.innerHTML = '<option value="">Carregando escolas...</option>';
        schoolSelect.disabled = true;
        
        // Buscar escolas da API com limite maior para pegar todas as escolas
        const response = await fetch(
            "https://sag-sag.rak8a3.easypanel.host/api/escolas?limit=100",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        
        if (!response.ok) {
            throw new Error(`Erro ao carregar escolas. Status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Resposta da API de escolas:', result);
        
        // Limpar seletor
        schoolSelect.innerHTML = '<option value="">Selecione uma escola</option>';
        
        // Extrair escolas do formato da resposta
        let schools = result && result.data && Array.isArray(result.data) ? result.data : (Array.isArray(result) ? result : []);
        
        // Se não houver escolas
        if (schools.length === 0) {
            schoolSelect.innerHTML = '<option value="">Nenhuma escola encontrada</option>';
            return;
        }
        
        // Adicionar cada escola ao seletor
        schools.forEach((school) => {
            const option = document.createElement("option");
            option.value = school.id;
            option.textContent = school.nome || "Escola sem nome";
            schoolSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao buscar escolas:", error);
        schoolSelect.innerHTML = '<option value="">Erro ao carregar escolas</option>';
    } finally {
        schoolSelect.disabled = false;
    }
} 