const D = [[4,  2,   1, -2],
           [3, -3,  -1, -1],
           [3,  5,   1,  1],
           [1, -1,  -1,  4]]


const I = [3, 2, 0,-2]

// console.log(JSON.stringify(D), JSON.stringify(I))

export default class LinearSolver {
    D = null;
    I = null;
    solutions = [];

    // constructor(D, I) {
    //     this.D = D;
    //     this.I = I;
    // };

    cramer(D, I){
        this.D = D;
        this.I = I;

        let matrix_size = this.D.length;
        let det_D = this.laplace(this.D);
        let M = null;
        
        if (!det_D) {
            this.solutions = ['Erro: Sistema impossível ou indeterminado!!']
            return;
        };

        for (let j = 0; j < matrix_size; j++) {
            M = JSON.parse(JSON.stringify(this.D));
            for (let i = 0; i < matrix_size; i++) {
                M[i][j] = this.I[i];
            }
            this.solutions[j] = this.laplace(M) / det_D;
       };
    };

    complementary(M, i) {
        let M_aux = M.map(lin => lin.slice(1, lin.length));
        M_aux.splice(i, 1);
        return M_aux;
    };

    laplace(M) {
        if (M.length < 3) {
            return (M[0][0] * M[1][1]) - (M[0][1] * M[1][0])
        };

        let sum = 0;
        let M_aux = 0;
        for(let i = 0; i < M.length; i++) {
            M_aux = this.complementary(M, i);
            sum += (-1)**(i+2) * M[i][0] * this.laplace(M_aux);
        }

        return sum;
    };

    getSolutions() {
        return this.solutions;
    };
};

// const solver = LinearSolver();
// solver.cramer(D, I);
// let solutions = solver.getSolutions();

// console.log(JSON.stringify(solutions))

