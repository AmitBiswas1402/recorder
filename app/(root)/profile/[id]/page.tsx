import Header from "@/components/Header";

const Profile = async ({params} : ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div className="wrapper page">
        <Header subHeader="amit@mail.com" title="Amit" userImg="/assets/images/dummy.jpg" />
        <h1 className="text-2xl font-karla">
            ID: {id}
        </h1>
    </div>
  )
}
export default Profile