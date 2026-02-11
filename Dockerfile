FROM nginx:alpine

# Copy static site files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copy custom nginx config for Cloud Run (port 8080)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
