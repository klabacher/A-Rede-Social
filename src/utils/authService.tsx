
let fakeuser = {
    username: "admin",
    password: "admin",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
}

class authService {
    private actualUser = null;

    get isLoggedIn(): boolean {
        return this.actualUser !== null;
    }

    login(location: any, username: string, password: string) {
        if (username === fakeuser.username && password === fakeuser.password) {
            location.push('/');
            return true;
        }
        return false;
    }

    register(location: any, username: string, password: string, email: string, phone?: string, address?: string, city?: string, state?: string) {
        location.push('/');
        return true;
    }

    logout() {
        return true;
    }
    getUserData() {
        return fakeuser;
    }
}

export default new authService();