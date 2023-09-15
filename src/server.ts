import {fastify} from 'fastify'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify()

app.register(getAllPromptsRoute) //prompts
app.register(uploadVideoRoute); //upload
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server Running')
})