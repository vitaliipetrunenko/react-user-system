# Use a lighter version of Node as a parent image
FROM mhart/alpine-node
# Set the working directory to /client
WORKDIR /Client

ENV PATH /Client/node_modules/.bin:$PATH
# copy package.json into the container at /client

COPY package.json ./
COPY package-lock.json ./

RUN npm install 


# add app
COPY . ./

# start app
CMD ["npm", "start"]
