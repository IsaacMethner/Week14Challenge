const app = express();
app.use(express.static(initial_path));
app.use(fileUpload());

app.get('/', (req, res) => { 
res.sendFile(path.join(initial_path, "home.html"));
})

app.listen("3000", () => {
    console.log('listening on port 3000');
})

