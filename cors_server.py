from http.server import HTTPServer, SimpleHTTPRequestHandler
class C(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin','*')
        self.send_header('Access-Control-Allow-Methods','GET,OPTIONS')
        self.send_header('Access-Control-Allow-Headers','*')
        SimpleHTTPRequestHandler.end_headers(self)
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()
HTTPServer(('0.0.0.0',9999),C).serve_forever()
