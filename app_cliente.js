// Arquivo: app_cliente.js
// Versão: Final com pop-up de alerta customizado

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Carregado. Iniciando app_cliente.js - Versão com Pop-up Customizado.");

    // ===================================================================
    // SELETORES DE ELEMENTOS DOM
    // ===================================================================
    // ... (seletores existentes)
    const formAgendamento = document.getElementById('form-agendamento');
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    // ======== NOVOS SELETORES PARA O MODAL DE ALERTA ========
    const modalAlerta = document.getElementById('modal-alerta');
    const modalAlertaTitulo = document.getElementById('modal-alerta-titulo');
    const modalAlertaMensagem = document.getElementById('modal-alerta-mensagem');
    const modalAlertaFechar = document.getElementById('modal-alerta-fechar');
    
    // ===================================================================
    // FUNÇÃO DO NOVO POP-UP
    // ===================================================================

    /**
     * Exibe uma janela de pop-up customizada com uma mensagem.
     * @param {string} mensagem A mensagem a ser exibida no corpo do pop-up.
     * @param {string} [titulo='Atenção'] O título do pop-up.
     */
    function mostrarAlertaCustomizado(mensagem, titulo = 'Atenção') {
        if (modalAlerta && modalAlertaTitulo && modalAlertaMensagem) {
            modalAlertaTitulo.textContent = titulo;
            modalAlertaMensagem.textContent = mensagem;
            modalAlerta.classList.add('visivel');
        } else {
            // Fallback para o alert padrão caso o modal não exista no DOM
            alert(`${titulo}: ${mensagem}`);
        }
    }

    /**
     * Fecha o pop-up customizado.
     */
    function fecharAlertaCustomizado() {
        modalAlerta?.classList.remove('visivel');
    }
    
    // ===================================================================
    // VARIÁVEIS DE ESTADO E URLs
    // ===================================================================
    // ... (código existente sem alterações)
    let agendamentoAtual = {};
    let pollingIntervalo = null;
    let agendamentoConsultado = null;
    const API_URL_BASE = 'http://localhost:8002/Api/';
    // ... (resto das URLs)


    // ===================================================================
    // FUNÇÕES DE LÓGICA (COM alert() SUBSTITUÍDO)
    // ===================================================================
    // ... (suas funções como salvarEstado, limparEstadoSessao, navegarPara, etc.)

    async function consultarEExibirStatus(telefone) {
        // ... (código da função)
        // Substituindo o alert dentro desta função
        if (resultado.error || !resultado.agendamento) {
            if (document.getElementById('tela-consulta-status').classList.contains('ativa')) {
                clearInterval(pollingIntervalo);
                mostrarAlertaCustomizado("Nenhum agendamento ativo encontrado para este telefone.", "Consulta");
                inicializarApp();
            }
            return;
        }
        // ... (resto da função)
    }

    async function aceitarSugestaoReagendamento() {
        if (!agendamentoConsultado || !agendamentoConsultado.id) {
            return mostrarAlertaCustomizado("Erro: ID do agendamento não encontrado para aceitar a sugestão.", "Erro");
        }
        // ... (resto da função com a substituição do alert de erro)
        try {
            // ...
        } catch (error) {
            mostrarAlertaCustomizado(`Erro: ${error.message}`, "Falha na Operação");
        } finally {
            // ...
        }
    }
    
    // ... (demais funções com a mesma lógica de substituição)

    // EXEMPLOS DE SUBSTITUIÇÃO NOS EVENT LISTENERS:

    inputData.addEventListener('change', function() {
        // ...
        if (this.value && dataSelecionada < hoje) {
            mostrarAlertaCustomizado("Não é possível agendar em uma data passada. Por favor, escolha uma data futura.", "Data Inválida");
            this.value = '';
            // ...
            return;
        }
        // ...
    });

    formAgendamento.addEventListener('submit', async function(event) {
        // ...
        if (!agendamentoAtual.servicoId || !agendamentoAtual.barbeiroId || !agendamentoAtual.data || !agendamentoAtual.horario || !agendamentoAtual.nomeCliente || !agendamentoAtual.telefoneCliente) { 
            mostrarAlertaCustomizado("Parece que faltou preencher alguma etapa. Por favor, verifique todos os campos do agendamento.", "Dados Incompletos"); 
            btnSubmit.disabled = false; 
            btnSubmit.innerHTML = '<i class="fas fa-check-circle"></i> Enviar Pedido'; 
            return; 
        }
        try {
            // ...
        } catch (erro) {
            mostrarAlertaCustomizado(`Houve um problema ao enviar seu pedido: ${erro.message}`, "Erro no Envio");
        } finally { 
            // ...
        }
    });

    btnAvancarParaData.addEventListener('click', () => {
        if (agendamentoAtual.barbeiroId) {
            navegarPara('tela-data-hora');
        } else {
            mostrarAlertaCustomizado("Por favor, escolha um barbeiro para continuar.", "Atenção");
        }
    });

    btnAvancarParaDados.addEventListener('click', () => {
        if (agendamentoAtual.horario) {
            navegarPara('tela-dados-cliente');
        } else {
            mostrarAlertaCustomizado("Por favor, escolha um horário disponível.", "Atenção");
        }
    });

    // ===================================================================
    // INICIALIZAÇÃO E LISTENERS DO MODAL
    // ===================================================================
    
    // Adiciona os listeners para fechar o modal
    modalAlertaFechar?.addEventListener('click', fecharAlertaCustomizado);
    modalAlerta?.addEventListener('click', function(event) {
        // Fecha o modal se o clique for no overlay (fundo escuro)
        if (event.target === modalAlerta) {
            fecharAlertaCustomizado();
        }
    });

    // Função de inicialização da APP
    (async () => {
        // ... (seu código de inicialização, como restaurarSessao e inicializarApp)
    })();

    // O código completo do ficheiro app_cliente.js vai aqui, com todas as
    // ocorrências de alert() substituídas por mostrarAlertaCustomizado().
    // Por questões de brevidade, apenas os exemplos mais importantes foram mostrados acima.
    // O ficheiro completo para copiar e colar está no final da resposta.
});

// Para facilitar, aqui está o ficheiro completo para você copiar.
// Basta substituir o seu `app_cliente.js` por este.

// =======================================================================
// INÍCIO DO CÓDIGO COMPLETO PARA app_cliente.js
// =======================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Carregado. Iniciando app_cliente.js - Versão com Pop-up Customizado.");

    // SELETORES DE ELEMENTOS DOM
    const telas = {};
    document.querySelectorAll('.tela').forEach(telaNode => { telas[telaNode.id] = telaNode; });
    const btnIniciarNovoAgendamento = document.getElementById('btn-iniciar-novo-agendamento');
    const btnConsultarAgendamento = document.getElementById('btn-consultar-agendamento');
    const formConsulta = document.getElementById('form-consulta');
    const inputTelefoneConsulta = document.getElementById('telefone-consulta');
    const cardsServicosContainer = document.getElementById('cards-servicos-container');
    const selectBarbeiro = document.getElementById('barbeiro');
    const inputData = document.getElementById('data');
    const divHorariosDisponiveis = document.getElementById('horarios-disponiveis');
    const formAgendamento = document.getElementById('form-agendamento');
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    const resumoAgConfirmadoEl = document.getElementById('resumo-agendamento-confirmado');
    const resumoAgRecusadoEl = document.getElementById('resumo-agendamento-recusado');
    const resumoReagendamentoPropostoEl = document.getElementById('resumo-reagendamento-proposto');
    const btnAceitarSugestao = document.getElementById('btn-aceitar-sugestao');
    const btnRecusarSugestao = document.getElementById('btn-recusar-sugestao');
    const btnInicioRecusaFeita = document.getElementById('btn-inicio-recusa-feita');
    const btnVoltarParaInicial1 = document.getElementById('btn-voltar-para-inicial-1');
    const btnVoltarParaInicial2 = document.getElementById('btn-voltar-para-inicial-2');
    const btnVoltarParaServicos = document.getElementById('btn-voltar-para-servicos');
    const btnAvancarParaData = document.getElementById('btn-avancar-para-data');
    const btnVoltarParaBarbeiros = document.getElementById('btn-voltar-para-barbeiros');
    const btnAvancarParaDados = document.getElementById('btn-avancar-para-dados');
    const btnVoltarParaDataHora = document.getElementById('btn-voltar-para-data-hora');
    const btnInicioPedidoEnviado = document.getElementById('btn-inicio-pedido-enviado');
    const btnInicioAgConfirmado = document.getElementById('btn-inicio-ag-confirmado');
    const btnInicioAgRecusado = document.getElementById('btn-inicio-ag-recusado');
    const modalAlerta = document.getElementById('modal-alerta');
    const modalAlertaTitulo = document.getElementById('modal-alerta-titulo');
    const modalAlertaMensagem = document.getElementById('modal-alerta-mensagem');
    const modalAlertaFechar = document.getElementById('modal-alerta-fechar');

    // URLs DA API
    const API_URL_BASE = 'https://dbem.infinityfreeapp.com/Api/';
    const API_URL_SERVICOS = `${API_URL_BASE}/listar_servicos.php`;
    const API_URL_BARBEIROS = `${API_URL_BASE}/listar_barbeiros.php`;
    const API_URL_CONFIGURACAO_DIA = `${API_URL_BASE}/obter_config_funcionamento_para_cliente.php`;
    const API_URL_SALVAR_AGENDAMENTO = `${API_URL_BASE}/salvar_agendamento.php`;
    const API_URL_CONSULTAR_STATUS = `${API_URL_BASE}/consultar_status_por_telefone.php`;
    const API_URL_ACEITAR_REAGENDAMENTO = `${API_URL_BASE}/aceitar_reagendamento.php`;
    const API_URL_RECUSAR_REAGENDamento = `${API_URL_BASE}/recusar_reagendamento.php`;

    // VARIÁVEIS DE ESTADO
    let agendamentoAtual = {};
    let pollingIntervalo = null;
    let agendamentoConsultado = null;

    // FUNÇÕES DO POP-UP CUSTOMIZADO
    function mostrarAlertaCustomizado(mensagem, titulo = 'Atenção') {
        if (modalAlerta && modalAlertaTitulo && modalAlertaMensagem) {
            modalAlertaTitulo.textContent = titulo;
            modalAlertaMensagem.textContent = mensagem;
            modalAlerta.classList.add('visivel');
        } else {
            alert(`${titulo}: ${mensagem}`);
        }
    }

    function fecharAlertaCustomizado() {
        modalAlerta?.classList.remove('visivel');
    }

    // LÓGICA DE PERSISTÊNCIA DE SESSÃO
    function salvarEstado() { try { localStorage.setItem('agendamentoState', JSON.stringify(agendamentoAtual)); const telaAtivaId = document.querySelector('.tela.ativa')?.id; if (telaAtivaId && telaAtivaId !== 'tela-inicial') { localStorage.setItem('telaAtiva', telaAtivaId); } } catch (e) { console.warn("Não foi possível salvar o estado no localStorage.", e); } }
    function limparEstadoSessao() { localStorage.removeItem('agendamentoState'); localStorage.removeItem('telaAtiva'); localStorage.removeItem('clienteAgendamentoTelefone'); }

    // FUNÇÕES UTILITÁRIAS E DE NAVEGAÇÃO
    function formatarHorario(h, m) { return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`; }
    function adicionarMinutos(h, m, minAdd) { let totalMin = (h * 60) + m + minAdd; return { horas: Math.floor(totalMin / 60), minutos: totalMin % 60 }; }
    function formatarDataHoraExibicaoAmigavel(dataStr, horaStr) { try { const [ano, mes, dia] = dataStr.split('-'); return `${dia}/${mes}/${ano} às ${horaStr}`; } catch (e) { return `${dataStr} ${horaStr}`; } }
    function navegarPara(idTelaDestino) { document.querySelector('.tela.ativa')?.classList.remove('ativa'); document.getElementById(idTelaDestino)?.classList.add('ativa'); window.scrollTo(0, 0); salvarEstado(); }

    function inicializarApp(resetCompleto = true) {
        if (resetCompleto) { limparEstadoSessao(); }
        clearInterval(pollingIntervalo);
        agendamentoAtual = {};
        agendamentoConsultado = null;
        document.querySelectorAll('form').forEach(form => form.reset());
        if (inputData) { const hoje = new Date(); const offset = hoje.getTimezoneOffset(); const hojeLocal = new Date(hoje.getTime() - (offset * 60 * 1000)); try { inputData.min = hojeLocal.toISOString().split('T')[0]; } catch (e) {} }
        if (divHorariosDisponiveis) divHorariosDisponiveis.innerHTML = '';
        document.querySelectorAll('.card-servico.selecionado').forEach(c => c.classList.remove('selecionado'));
        navegarPara('tela-inicial');
    }

    async function restaurarSessao() { try { const estadoSalvo = localStorage.getItem('agendamentoState'); const telaSalva = localStorage.getItem('telaAtiva'); if (estadoSalvo && telaSalva && telaSalva !== 'tela-inicial') { agendamentoAtual = JSON.parse(estadoSalvo); if (agendamentoAtual.servicoId) { await fetchEPopularServicos(true); document.querySelector(`[data-servico-id='${agendamentoAtual.servicoId}']`)?.classList.add('selecionado'); } if (agendamentoAtual.barbeiroId) { await fetchEPopularBarbeiros(); selectBarbeiro.value = agendamentoAtual.barbeiroId; } if (agendamentoAtual.data) { inputData.value = agendamentoAtual.data; if(agendamentoAtual.barbeiroId) { await popularHorarios(agendamentoAtual.data, agendamentoAtual.barbeiroId, agendamentoAtual.servicoId); } } if (agendamentoAtual.horario && divHorariosDisponiveis) { const btnHorario = Array.from(divHorariosDisponiveis.querySelectorAll('button')).find(b => b.textContent === agendamentoAtual.horario); btnHorario?.classList.add('selecionado'); } if (agendamentoAtual.nomeCliente) inputNome.value = agendamentoAtual.nomeCliente; if (agendamentoAtual.telefoneCliente) inputTelefone.value = agendamentoAtual.telefoneCliente.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); navegarPara(telaSalva); return true; } } catch (e) { console.error("Falha ao restaurar sessão, iniciando do zero.", e); limparEstadoSessao(); } return false; }

    // FUNÇÕES DE LÓGICA E RENDERIZAÇÃO
    function preencherResumo(elementoPai, agendamento) { if (!elementoPai || !agendamento) return; const dataHoraFormatada = formatarDataHoraExibicaoAmigavel(agendamento.data_agendamento, agendamento.hora_agendamento_formatada); elementoPai.innerHTML = `<p><strong>Serviço:</strong> ${agendamento.nome_servico || 'N/A'}</p><p><strong>Barbeiro:</strong> ${agendamento.nome_barbeiro || 'N/A'}</p><p><strong>Data e Hora:</strong> ${dataHoraFormatada}</p>`; }
    function preencherResumoReagendamento(elementoPai, agendamento) { if (!elementoPai || !agendamento) return; const novoHorarioFormatado = formatarDataHoraExibicaoAmigavel(agendamento.data_agendamento, agendamento.hora_agendamento_formatada); elementoPai.innerHTML = `<p><strong>Serviço:</strong> ${agendamento.nome_servico || 'N/A'}</p><p style="color: var(--cor-destaque); font-weight: bold; font-size: 1.1em; margin-top:15px;"><i class="fas fa-arrow-down"></i> NOVO HORÁRIO SUGERIDO:</p><p style="font-size: 1.2em; font-weight: bold;">${novoHorarioFormatado}</p>`; }

    async function consultarEExibirStatus(telefone) { const telefoneNormalizado = telefone.replace(/[^\d]/g, ''); try { const response = await fetch(`${API_URL_CONSULTAR_STATUS}?telefone=${encodeURIComponent(telefoneNormalizado)}`); const resultado = await response.json(); if (resultado.error || !resultado.agendamento) { if (document.getElementById('tela-consulta-status').classList.contains('ativa')) { clearInterval(pollingIntervalo); mostrarAlertaCustomizado("Nenhum agendamento ativo encontrado para este telefone.", "Consulta"); inicializarApp(); } return; } agendamentoConsultado = resultado.agendamento; switch (agendamentoConsultado.status) { case 'Pendente': break; case 'Confirmado': clearInterval(pollingIntervalo); preencherResumo(resumoAgConfirmadoEl, agendamentoConsultado); navegarPara('tela-agendamento-confirmado'); break; case 'Recusado': case 'CanceladoPeloSalao': clearInterval(pollingIntervalo); preencherResumo(resumoAgRecusadoEl, agendamentoConsultado); navegarPara('tela-agendamento-recusado'); break; case 'ReagendamentoSugeridoPeloSalao': clearInterval(pollingIntervalo); preencherResumoReagendamento(resumoReagendamentoPropostoEl, agendamentoConsultado); navegarPara('tela-reagendamento-proposto'); break; default: clearInterval(pollingIntervalo); inicializarApp(); } } catch (error) { console.error("Erro no polling de status:", error); clearInterval(pollingIntervalo); } }

    async function aceitarSugestaoReagendamento() { if (!agendamentoConsultado || !agendamentoConsultado.id) return mostrarAlertaCustomizado("Erro: ID do agendamento não encontrado.", "Erro"); btnAceitarSugestao.disabled = true; btnAceitarSugestao.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Aceitando...'; try { const response = await fetch(API_URL_ACEITAR_REAGENDAMENTO, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ agendamentoId: agendamentoConsultado.id }) }); const resultadoApi = await response.json(); if (!response.ok || resultadoApi.error) throw new Error(resultadoApi.message); const telefone = localStorage.getItem('clienteAgendamentoTelefone'); if (telefone) await consultarEExibirStatus(telefone); } catch (error) { mostrarAlertaCustomizado(`Erro: ${error.message}`, "Falha na Operação"); } finally { btnAceitarSugestao.disabled = false; btnAceitarSugestao.innerHTML = '<i class="fas fa-check"></i> Aceitar Novo Horário'; } }
    async function recusarSugestaoReagendamento() { if (!agendamentoConsultado || !agendamentoConsultado.id) return mostrarAlertaCustomizado("Erro: ID do agendamento não encontrado.", "Erro"); btnRecusarSugestao.disabled = true; btnRecusarSugestao.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Recusando...'; try { const response = await fetch(API_URL_RECUSAR_REAGENDamento, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ agendamentoId: agendamentoConsultado.id }) }); const resultadoApi = await response.json(); if (!response.ok || resultadoApi.error) throw new Error(resultadoApi.message); navegarPara('tela-reagendamento-recusado'); } catch (error) { mostrarAlertaCustomizado(`Erro: ${error.message}`, "Falha na Operação"); } finally { btnRecusarSugestao.disabled = false; btnRecusarSugestao.innerHTML = '<i class="fas fa-times"></i> Recusar'; } }
    async function fetchEPopularServicos(isRestoring = false) { if (!cardsServicosContainer) return; if (!isRestoring) cardsServicosContainer.innerHTML = '<div class="spinner"></div>'; try { const response = await fetch(API_URL_SERVICOS); if (!response.ok) { throw new Error(`Erro de rede: ${response.status}`); } const data = await response.json(); if (data.error) { throw new Error(`Erro da API: ${data.message}`); } const servicosDaAPI = data.servicos || []; cardsServicosContainer.innerHTML = ''; if (servicosDaAPI.length > 0) { servicosDaAPI.forEach(servico => { const card = document.createElement('div'); card.classList.add('card-servico'); card.dataset.servicoId = servico.id; card.innerHTML = `<div class="card-servico-icone"><i class="${servico.icone_classe || 'fas fa-cut'}"></i></div><div class="card-servico-info"><h3>${servico.nome}</h3><p>Preço: R$ ${Number(servico.preco).toFixed(2)} | Duração: ${servico.duracao_minutos} min</p></div><div class="card-servico-selecao-icone"><i class="fas fa-chevron-right"></i></div>`; card.addEventListener('click', async () => { document.querySelectorAll('.card-servico.selecionado').forEach(c => c.classList.remove('selecionado')); card.classList.add('selecionado'); agendamentoAtual.servicoId = parseInt(card.dataset.servicoId); agendamentoAtual.servicoSelecionadoInfo = servicosDaAPI.find(s => s.id == agendamentoAtual.servicoId); navegarPara('tela-barbeiros'); await fetchEPopularBarbeiros(); }); cardsServicosContainer.appendChild(card); }); } else { cardsServicosContainer.innerHTML = '<p class="status-info-subtle">Nenhum serviço disponível no momento.</p>'; } } catch(error) { cardsServicosContainer.innerHTML = `<p class="status-info-subtle erro"><strong>Erro ao carregar serviços.</strong><br>${error.message}</p>`; } }
    async function fetchEPopularBarbeiros() { if (!selectBarbeiro) return; selectBarbeiro.innerHTML = '<option value="">Carregando...</option>'; try { const response = await fetch(API_URL_BARBEIROS); if (!response.ok) throw new Error(`Erro de rede: ${response.status}`); const data = await response.json(); if (data.error) throw new Error(`Erro da API: ${data.message}`); const barbeirosDaAPI = data.barbeiros.map(b => ({...b, id: parseInt(b.id) })); selectBarbeiro.innerHTML = '<option value="">Escolha um barbeiro...</option>'; if (barbeirosDaAPI && barbeirosDaAPI.length > 0) { barbeirosDaAPI.forEach(barbeiro => { const option = document.createElement('option'); option.value = barbeiro.id; option.textContent = barbeiro.nome; selectBarbeiro.appendChild(option); }); } else { selectBarbeiro.innerHTML = '<option value="">Nenhum barbeiro disponível</option>'; } } catch (error) { selectBarbeiro.innerHTML = `<option value="">Erro ao carregar</option>`; } }
    async function popularHorarios(data, barbeiroId, servicoId) { if (!divHorariosDisponiveis) return; divHorariosDisponiveis.innerHTML = '<div class="spinner"></div>'; agendamentoAtual.horario = null; try { if (!data || !barbeiroId || !servicoId) { throw new Error("Selecione serviço, barbeiro e data."); } if (!agendamentoAtual.servicoSelecionadoInfo) { throw new Error("Informação do serviço não carregada."); } const dataFormatada = new Date(`${data}T12:00:00`).toISOString().split('T')[0]; const url = `${API_URL_CONFIGURACAO_DIA}?data=${dataFormatada}&barbeiroId=${barbeiroId}`; const response = await fetch(url); if (!response.ok) throw new Error(`Falha no servidor: ${response.status}`); const resultado = await response.json(); if (resultado.error || !resultado.configDia || resultado.configDia.fechado) { divHorariosDisponiveis.innerHTML = '<p class="status-info-subtle">A barbearia está fechada neste dia.</p>'; return; } const { inicio, fim, horariosOcupados = [] } = resultado.configDia; const { duracao_minutos } = agendamentoAtual.servicoSelecionadoInfo; const horariosGerados = []; let horaAtual = inicio, minutoAtual = 0; const fimEmMinutos = fim * 60; while (true) { if ((horaAtual * 60 + minutoAtual) >= fimEmMinutos) break; const { horas: hFim, minutos: mFim } = adicionarMinutos(horaAtual, minutoAtual, duracao_minutos); if ((hFim * 60 + mFim) <= fimEmMinutos) { horariosGerados.push(formatarHorario(horaAtual, minutoAtual)); } const { horas: hProx, minutos: mProx } = adicionarMinutos(horaAtual, minutoAtual, 30); horaAtual = hProx; minutoAtual = mProx; } divHorariosDisponiveis.innerHTML = ''; let horariosDisponiveisEncontrados = 0; if (horariosGerados.length > 0) { horariosGerados.forEach(h => { const btn = document.createElement('button'); btn.type = 'button'; if (horariosOcupados.includes(h)) { btn.textContent = h; btn.classList.add('horario-ocupado'); btn.disabled = true; } else { horariosDisponiveisEncontrados++; btn.textContent = h; btn.addEventListener('click', function() { document.querySelectorAll('#horarios-disponiveis button.selecionado').forEach(b => b.classList.remove('selecionado')); this.classList.add('selecionado'); agendamentoAtual.horario = h; salvarEstado(); }); } divHorariosDisponiveis.appendChild(btn); }); } if (horariosDisponiveisEncontrados === 0) { divHorariosDisponiveis.innerHTML = '<p class="status-info-subtle">Nenhum horário vago encontrado para este dia.</p>'; } } catch (error) { divHorariosDisponiveis.innerHTML = `<p class="status-info-subtle erro"><strong>Ocorreu um erro.</strong><br>${error.message}</p>`; } }

    // EVENT LISTENERS
    btnIniciarNovoAgendamento.addEventListener('click', async () => { inicializarApp(true); navegarPara('tela-servicos'); await fetchEPopularServicos(); });
    btnConsultarAgendamento.addEventListener('click', () => { limparEstadoSessao(); inicializarApp(true); navegarPara('tela-consulta-status'); });
    formConsulta.addEventListener('submit', async (e) => { e.preventDefault(); const telefone = inputTelefoneConsulta.value.replace(/[^\d]/g, ''); const btnSubmit = formConsulta.querySelector('button[type="submit"]'); if (!telefone) return; btnSubmit.disabled = true; btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; localStorage.setItem('clienteAgendamentoTelefone', telefone); await consultarEExibirStatus(telefone); pollingIntervalo = setInterval(() => consultarEExibirStatus(telefone), 30000); btnSubmit.disabled = false; btnSubmit.innerHTML = '<i class="fas fa-paper-plane"></i> Verificar'; });
    selectBarbeiro.addEventListener('change', function() { agendamentoAtual.barbeiroId = this.value ? parseInt(this.value) : null; if (inputData.value && agendamentoAtual.barbeiroId) { popularHorarios(inputData.value, agendamentoAtual.barbeiroId, agendamentoAtual.servicoId); } salvarEstado(); });
    inputData.addEventListener('change', function() { const dataSelecionada = new Date(this.value + "T12:00:00"); const hoje = new Date(); hoje.setHours(0, 0, 0, 0); if (this.value && dataSelecionada < hoje) { mostrarAlertaCustomizado("Não é possível agendar em uma data passada. Por favor, escolha uma data futura.", "Data Inválida"); this.value = ''; agendamentoAtual.data = null; if (divHorariosDisponiveis) divHorariosDisponiveis.innerHTML = ''; salvarEstado(); return; } agendamentoAtual.data = this.value; if (agendamentoAtual.barbeiroId) { popularHorarios(this.value, agendamentoAtual.barbeiroId, agendamentoAtual.servicoId); } salvarEstado(); });
    formAgendamento.addEventListener('submit', async function(event) { event.preventDefault(); const btnSubmit = this.querySelector('button[type="submit"]'); btnSubmit.disabled = true; btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; agendamentoAtual.nomeCliente = inputNome.value.trim(); agendamentoAtual.telefoneCliente = inputTelefone.value.replace(/[^\d]/g, ''); if (!agendamentoAtual.servicoId || !agendamentoAtual.barbeiroId || !agendamentoAtual.data || !agendamentoAtual.horario || !agendamentoAtual.nomeCliente || !agendamentoAtual.telefoneCliente) { mostrarAlertaCustomizado("Parece que faltou preencher alguma etapa. Por favor, verifique todos os campos do agendamento.", "Dados Incompletos"); btnSubmit.disabled = false; btnSubmit.innerHTML = '<i class="fas fa-check-circle"></i> Enviar Pedido'; return; } try { const resposta = await fetch(API_URL_SALVAR_AGENDAMENTO, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(agendamentoAtual) }); const resultadoApi = await resposta.json(); if (!resposta.ok || resultadoApi.error) throw new Error(resultadoApi.message); limparEstadoSessao(); localStorage.setItem('clienteAgendamentoTelefone', agendamentoAtual.telefoneCliente); navegarPara('tela-pedido-enviado'); setTimeout(() => consultarEExibirStatus(agendamentoAtual.telefoneCliente), 1500); pollingIntervalo = setInterval(() => consultarEExibirStatus(agendamentoAtual.telefoneCliente), 3000); } catch (erro) { mostrarAlertaCustomizado(`Houve um problema ao enviar seu pedido: ${erro.message}`, "Erro no Envio"); } finally { btnSubmit.disabled = false; btnSubmit.innerHTML = '<i class="fas fa-check-circle"></i> Enviar Pedido'; } });
    
    btnAceitarSugestao.addEventListener('click', aceitarSugestaoReagendamento);
    btnRecusarSugestao.addEventListener('click', recusarSugestaoReagendamento);
    btnInicioRecusaFeita.addEventListener('click', () => inicializarApp(true));
    btnVoltarParaInicial1.addEventListener('click', () => inicializarApp(true));
    btnVoltarParaInicial2.addEventListener('click', () => inicializarApp(true));
    btnVoltarParaServicos.addEventListener('click', () => navegarPara('tela-servicos'));
    btnAvancarParaData.addEventListener('click', () => { if (agendamentoAtual.barbeiroId) { navegarPara('tela-data-hora'); } else { mostrarAlertaCustomizado("Por favor, escolha um barbeiro para continuar."); } });
    btnVoltarParaBarbeiros.addEventListener('click', () => navegarPara('tela-barbeiros'));
    btnAvancarParaDados.addEventListener('click', () => { if (agendamentoAtual.horario) { navegarPara('tela-dados-cliente'); } else { mostrarAlertaCustomizado("Por favor, escolha um horário disponível."); } });
    btnVoltarParaDataHora.addEventListener('click', () => navegarPara('tela-data-hora'));
    btnInicioPedidoEnviado.addEventListener('click', () => inicializarApp(true));
    btnInicioAgConfirmado.addEventListener('click', () => inicializarApp(true));
    btnInicioAgRecusado.addEventListener('click', () => { inicializarApp(true); btnIniciarNovoAgendamento.click(); });
    
    modalAlertaFechar?.addEventListener('click', fecharAlertaCustomizado);
    modalAlerta?.addEventListener('click', function(event) { if (event.target === modalAlerta) { fecharAlertaCustomizado(); } });

    // INICIALIZAÇÃO DA APLICAÇÃO
    (async () => {
        const sessaoRestaurada = await restaurarSessao();
        if (!sessaoRestaurada) {
            inicializarApp(false);
        }
    })();
});
