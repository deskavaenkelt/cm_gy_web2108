// interface 
// Ett interface är en mall för hur en klass ska se ut, vad den ska innehålla.

class trumpet {
}

class piano {
}
// Vi kan inte ärva två klasser! :(
class melodicas_error extends piano, trumpet {
}

class beaver {
}

class duck {
}

// Vi kan inte ärva två klasser! :'(
class platypus_error extends beaver, duck {

}
