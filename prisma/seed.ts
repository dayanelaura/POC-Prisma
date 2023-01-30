import dayjs from "dayjs";
import prisma from "../src/database/database.js";

async function main(){
    await prisma.movies.createMany({
        data: [
            {
                title: "Gato de Botas 2: O Último Pedido",
                description: "Gato de Botas parte para conseguir seu último desejo antes de esgotar sua última vida",
                duration: "1h42m",
                created_at: dayjs().format('YYYY-MM-DD')
            },
            {
                title: "M3GAN",
                description: "Uma roboticista faz um protótipo chamado M3GAN, projetada para ser companheira de qualquer criança do país. Após ganhar custodia de sua sobrinha, ela decide testar o novo robô",
                duration: "1h42m",
                created_at: dayjs().format('YYYY-MM-DD')
            },
            {
                title: "Avatar: O Caminho da Água",
                description: "Sequência do longa de 2009 dirigido por James Cameron, Jake Sully e Ney'tiri devem lutar novamente para salvar o planeta de Pandora de uma ameaça familiar",
                duration: "3h12m",
                created_at: dayjs().format('YYYY-MM-DD')
            },
        ]
    });
}

try{
    main();
    console.log("Registro realizado com sucesso");
    async () => await prisma.$disconnect();
}catch(err){
    console.log(err);
    async () => await prisma.$disconnect();
    process.exit(1);
}