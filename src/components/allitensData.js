export function pastas (search) {
    return [
        {
            id: 1,
            valor: 27.0,
            nome: "Spaghetti al pomodoro",
            descricao: "etc"
        },
        {
            id: 2,
            valor: 32.0,
            nome: "Fettuccine con polpette",
            descricao: "etc"
        },
        {
            id: 3,
            valor: 28.0,
            nome: "Penne al sugo di pomodoro con rosmarino",
            descricao: "etc"
        },
        {
            id: 4,
            valor: 34.0,
            nome: "Tortellini con salsa alfredo di succa",
            descricao: "etc"
        },
        {
            id: 5,
            valor: 32.0,
            nome: "Rigatoni al sugo di formaggio",
            descricao: "etc"
        },
        {
            id: 6,
            valor: 27.0,
            nome: "Fettuccine al pomodoro e basilico",
            descricao: "etc"
        },
        {
            id: 7,
            valor: 28.0,
            nome: "Fusilli ao molho pesto",
            descricao: "etc"
        },
        {
            id: 8,
            valor: 32.0,
            nome: "Spaghetti ala puttanesca",
            descricao: "etc"
        },
        {
            id: 9,
            valor: 36.0,
            nome: "sphaghetti alla carbonara",
            descricao: "etc"
        },
        {
            id: 10,
            valor: 34.0,
            nome: "Tortellini alla panna",
            descricao: "etc"
        },
        {
            id: 11,
            valor: 40.0,
            nome: "Quattro formaggi",
            descricao: "etc",
            size: "8 fatias"
        },
        {
            id: 12,
            valor: 46.0,
            nome: "Capricciosa",
            descricao: "etc",
            size: "8 fatias"
        },
        {
            id: 13,
            valor: 44.0,
            nome: "peperoni",
            descricao: "etc",
            size: "8 fatias"
        },
        {
            id: 14,
            valor: 42.0,
            nome: "primavera",
            descricao: "etc",
            size: "8 fatias"
        },
        {
            id: 15,
            valor: 46.0,
            nome: "Prosciutto crudo",
            descricao: "etc",
            size: "8 fatias"
        },
        {
            id: 16,
            valor: 45.0,
            nome: "Lasagne di pollo con catupiry",
            descricao: "etc",
            size: "p/ 2 pessoas"
        },
        {
            id: 17,
            valor: 40.0,
            nome: "Lasagna vegane",
            descricao: "etc",
            size: "p/ 2 pessoas"
        },
        {
            id: 18,
            valor: 47.0,
            nome: "Lasagna con funghi e formaggio",
            descricao: "etc",
            size: "p/ 2 pessoas"
        },
        {
            id: 19,
            valor: 40.0,
            nome: "Lasagna bolognese",
            descricao: "etc",
            size: "p/ 2 pessoas"
        },
        {
            id: 20,
            valor: 47.0,
            nome: "Lasagne ai tre formaggi",
            descricao: "etc",
            size: "p/ 2 pessoas"
        }
    ].filter(pasta => pasta.nome.toLowerCase().includes(search.toLowerCase()))
}

export function drinks(search) {
    const data = [
        {name: "Aperol spritz", price: 23},
        {name: "negroni", price: 28},
        {name: "Bellini", price: 22},
        {name: "Campari", price: 22},
        {name: "Amaretto", price: 24},
        {name: "Limoncello", price: 20},
        {name: "Cynar", price: 19},
        {name: "Soda italiana", price: 13},
        {name: "água mineral sem gás", price: 9},
        {name: "água mineral com gás", price: 9}
    ]

    return data.filter(drink => drink.name.toLowerCase().includes(search.toLowerCase()));
}

export function desserts(search) {
    return [
        {name: "Cannoli siciliani - 4 unidades", valor: 32.00},
        {name: "Panna cotta ai frutti rossi", valor: 36.00},
        {name: "Tiramisu al cioccolato - 2 unidades", valor: 24.00},
        {name: "Torrone con pistacchi e mandorle - 2 unidades", valor: 42.00},
        {name: "Gelato al cioccolato e nocciola", valor: 32.00},
        {name: "Pignoli - 6 unidades", valor: 36.00},
        {name: "Paglia italiana - 2 unidades", valor: 24.00},
        {name: "Crostata di marmellata di fragole - 350g", valor: 40.00},
        {name: "Zeppole alla crema - 2 unidades", valor: 22.00},
        {name: "Bomboloni con ripieno di crema - 2 unidades", valor: 26.00}
    ].filter(dessert => dessert.name.toLowerCase().includes(search.toLowerCase()));
}
