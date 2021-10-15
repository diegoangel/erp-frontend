const rewire = require("rewire")
const start = rewire("./start")
const setupCompiler = start.__get__("setupCompiler")
const onProxyError = start.__get__("onProxyError")
const addMiddleware = start.__get__("addMiddleware")
const runDevServer = start.__get__("runDevServer")
const run = start.__get__("run")
// @ponicode
describe("setupCompiler", () => {
    test("0", () => {
        let callFunction = () => {
            setupCompiler("smtp-relay.sendinblue.com", 3000, "http")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            setupCompiler(10, 3000, "http")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            setupCompiler("smtp.gmail.com", -10, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            setupCompiler(-10, 587, "http")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            setupCompiler("smtp-relay.sendinblue.com", 8000, "https")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            setupCompiler(-Infinity, undefined, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onProxyError", () => {
    test("0", () => {
        let callFunction = () => {
            onProxyError("bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            onProxyError(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            onProxyError("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            onProxyError(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            onProxyError(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            onProxyError(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addMiddleware", () => {
    test("0", () => {
        let callFunction = () => {
            addMiddleware({ middleware: "Marketing", listeningApp: { on: () => "2021-07-30T00:05:36.818Z" }, use: () => "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            addMiddleware({ middleware: "Chief Product Officer", listeningApp: { on: () => "2021-07-29T17:54:41.653Z" }, use: () => "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            addMiddleware({ middleware: "Software Engineer", listeningApp: { on: () => "2021-07-29T20:12:53.196Z" }, use: () => "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            addMiddleware({ middleware: "Marketing", listeningApp: { on: () => "2021-07-29T23:03:48.812Z" }, use: () => "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            addMiddleware({ middleware: "Software Engineer", listeningApp: { on: () => "2021-07-29T15:31:46.922Z" }, use: () => "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            addMiddleware(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("runDevServer", () => {
    test("0", () => {
        let callFunction = () => {
            runDevServer("smtp-relay.sendinblue.com", 8000, "http")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            runDevServer("smtp-relay.sendinblue.com", 3000, "http")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            runDevServer("smtp.gmail.com", 1, "https")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            runDevServer(1, 3000, "http")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            runDevServer("smtp-relay.sendinblue.com", -10, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            runDevServer(NaN, NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("run", () => {
    test("0", () => {
        let callFunction = () => {
            run(3000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            run(8000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            run(587)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            run(457)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            run(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
