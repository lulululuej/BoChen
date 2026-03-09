from flask import Flask, render_template

app = Flask(__name__)

@app.route('/taiwan-news-202601')
def home():
    return render_template('index.html')

@app.route('/taiwan-news-202602')
def news2():
    return render_template('index2.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
