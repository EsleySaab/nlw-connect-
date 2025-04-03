import Button from "@/components/button"
import IconButton from "@/components/icon-button"
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { ArrowRight, Copy, Mail } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot error>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField />
        </InputRoot>
      </div>
    </main>
  )
}
