# syntax=docker/dockerfile:1.4

FROM node:lts-buster-slim AS development

ENV MONGO_URL mongodb+srv://kyledotzip:IZXVOxYotklEbqDg@cluster0.d1tn7ju.mongodb.net/?retryWrites=true&w=majority
ENV PORT 5000

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app

EXPOSE 5000

CMD [ "npm", "start" ]

FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]
