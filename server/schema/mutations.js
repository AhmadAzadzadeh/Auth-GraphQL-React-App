const graphql = require("graphql");
const AuthService = require("../services/auth");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require("./types/user_type");

const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		signup: {
			type: UserType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			},
			resolve(parentValue, { email, password }, request) {
				return AuthService.signup({ email, password, req: request });
			}
		},
		logout: {
			type: UserType,
			resolve(parentValue, args, request) {
				const { user } = request;
				request.logout();
				return user;
			}
		},
		login: {
			type: UserType,
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString }
			},
			resolve(parentValue, { email, password }, request) {
				return AuthService.login({ email, password, req: request });
			}
		}
	}
});

module.exports = mutation;
