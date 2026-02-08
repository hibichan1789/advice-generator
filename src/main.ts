interface Quote{
    slip:{
        id:number;
        advice:string;
    }
}
const apiUrl = import.meta.env.VITE_API_URL as string|null;

const generateButton = document.getElementById("generate-button") as HTMLButtonElement;
const generatedQuote = document.getElementById("generated-quote") as HTMLParagraphElement;


generateButton.addEventListener("click",async ()=>{
    generateButton.disabled = true;
    generatedQuote.textContent = "取得中";
    if(!apiUrl){
        generatedQuote.textContent = "取得に失敗しました";
        generateButton.disabled = false;
        return;
    }
    const quoteData = await fetchQuoteData(apiUrl);
    generateButton.disabled = false;
    if(!quoteData){
        generatedQuote.textContent = "取得に失敗しました";
        return;
    }
    const advice = quoteData.slip.advice;
    generatedQuote.textContent = advice;
});

async function fetchQuoteData(apiUrl:string):Promise<Quote|null>{
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error("Network response was not OK");
        }
        const quoteData:Quote = await response.json();
        return quoteData;
    }
    catch(error){
        console.error("Fetch Error", error);
        return null;
    }
}