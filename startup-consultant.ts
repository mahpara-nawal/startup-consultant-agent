import { Langbase } from 'langbase';
import 'dotenv/config';

const LANGBASE_API_KEY = process.env.LANGBASE_API_KEY!;

async function askStartupConsultant(question: string) {
    const langbase = new Langbase({ apiKey: LANGBASE_API_KEY });

    const response = await langbase.pipes.run({
    name: "startup-consultant",
    messages: [ { role: "user", content: question } ]
        
    });

    return response;
}

async function main() {
    const question = "What are the key things I should validate before building a minimum viable product?";
    console.log(`Asking: ${question}\n`);

    const answer = await askStartupConsultant(question);
    console.log("Answer:", answer);
}

main();