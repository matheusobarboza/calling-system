import Title from "@/components/Title"
import { FiSettings } from "react-icons/fi"

const Profile = () => {
  return (
    <main className="p-5 w-full">
      <div>
        <Title title="Minha Conta">
          <FiSettings size={25} />
        </Title>
      </div>
    </main>
  )
}

export default Profile