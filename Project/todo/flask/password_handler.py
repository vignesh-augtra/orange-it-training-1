import bcrypt

def hash(passwordString):
    # converting password to array of bytes
    bytes = passwordString.encode('utf-8')
    
    # generating the salt
    salt = bcrypt.gensalt()
    
    # Hashing the password
    hash = bcrypt.hashpw(bytes, salt)

    return (hash)

def check(loginPassword, hashedPassword):

    # encoding the user entered password
    loginPasswordInBytes = loginPassword.encode('utf-8')

    # byte of password from DB
    hasedPasswordInBytes = bytes(hashedPassword, 'utf-8')
    result = bcrypt.checkpw(loginPasswordInBytes, hasedPasswordInBytes)

    return result

