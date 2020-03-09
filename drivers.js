export let KICK = f => arg => requestAnimationFrame(() => f(arg));
export let DEBUGGER = f => arg => {debugger; return f(arg)};
export let KDEBUGGER = f => KICK(DEBUGGER(f));

export let ANUMBER = f => n => x => f(n)(x)
