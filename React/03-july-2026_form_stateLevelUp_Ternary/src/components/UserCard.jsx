
const UserCard = ({ user }) => {


    return (
        <div className="p-4 flex flex-col gap-4 border-gray-400 border rounded">
            <div className="w-50 h-50 rounded overflow-hidden">
                <img className="h-full w-full" src={user.image} alt="" />
            </div>
            <div>
                <h1>Name : {user.name}</h1>
                <p>Email : {user.email} </p>
            </div>
                <button>Delete</button>
        </div>

    );
};

export default UserCard;
