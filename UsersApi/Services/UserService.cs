using UsersApi.Models;

namespace UsersApi.Services
{
    public class UserService
    {
        private static List<User> users = new List<User>
        {
            new User { Id = 1, Name = "Juan" },
            new User { Id = 2, Name = "Maria" },
            new User { Id = 3, Name = "Carlos" }
        };

        private static int nextId = 4;

        public List<User> GetAll()
        {
            return users;
        }

        public User Create(string name)
        {
            var user = new User
            {
                Id = nextId++,
                Name = name
            };

            users.Add(user);
            return user;
        }
    }
}