import "dotenv/config"
import { Sequelize, Model, DataTypes as T } from 'sequelize'

const sequelize = new Sequelize(
    "database",
    "user",
    "password",
    {
      host: "0.0.0.0",
      dialect: "sqlite",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: "./database.sqlite"
    }
  );

const Message = sequelize.define('Message', {
    time: {
        type: T.DATE,
        allowNull: false
    },
    text: {
        type: T.STRING, 
        allowNull: false
    },
    id: {
        type: T.UUID,
        defaultValue: T.UUIDV4,
        allowNull: false, 
        primaryKey: true
    }
})

const User = sequelize.define('User', {
    username: {
        type: T.STRING, 
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: T.STRING, 
        allowNull: false 
    },
})

const Room = sequelize.define('Room', {
    id: {
        type: T.UUID,
        defaultValue: T.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: T.STRING, 
    },
    owner: {
        type: T.STRING, 
        allowNull: false,
    }
})

const UserRoom = sequelize.define('UserRoom')

Room.hasMany(Message, { onDelete: "cascade" })
Message.hasOne(User)
Room.belongsToMany(User, { through: UserRoom })
User.belongsToMany(Room, { through: UserRoom })


export { User, Room, Message, UserRoom, sequelize } 