import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

// Função para criar a planilha
export async function criarPlanilha(data) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Expense Data');

    // Adicionando cabeçalho
    worksheet.addRow(['COLABORADOR', 'E-MAIL COLABORADOR', 'DEPARTAMENTO', 'DATA', 'LOCAL', 'TRANSPORTE', 'ESTACIONAMENTO / PEDÁGIO', 'COMBUSTÍVEL / MANUTENÇÃO', 'HOSPEDAGEM', 'REFEIÇÕES', 'TELEFONE / INTERNET / CORREIOS', 'OUTROS', 'OBSERVAÇÕES', 'MOTIVO REFEIÇÃO EXCEDIDA']);

    // Adicionando dados
    worksheet.addRow([
        data.name,
        data.email,
        data.department,
        data.dateExpense,
        data.place,
        data.transport,
        data.parking,
        data.vehicle,
        data.accommodation,
        data.meals,
        data.phone,
        data.others,
        data.comments,
        data.reasonMeals,
    ]);

    // Salvar a planilha em um buffer
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
}

// Função para salvar o buffer em um arquivo
export async function salvarPlanilha(buffer, filename) {
    const blob = new Blob([buffer]);
    saveAs(blob, filename); // Use a função saveAs para salvar o arquivo
}

