import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const basePromptPrefix= "Give a response in the style of Kanye West to the following: ";
const generateAction = async(req,res) => {
    console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`)

    const baseCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages: [{role:"user", content:`${basePromptPrefix}${req.body.userInput}`}]
    });
    console.log(baseCompletion);
    const basePromptOutput = baseCompletion.choices.pop().message.content;

    res.status(200).json({output: basePromptOutput});
}

export default generateAction;