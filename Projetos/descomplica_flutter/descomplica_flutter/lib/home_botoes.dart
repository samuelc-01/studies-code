import 'package:flutter/material.dart';
import 'paginas/produtos_page.dart';
import 'paginas/categorias_page.dart';
import 'paginas/pessoa_page.dart';
import 'paginas/media_query_page.dart';
import 'listas/listas_page.dart';

class HomeBotoes extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Naveção de Páginas'),
        ),
        body: Container(
          width: double.infinity,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                'assets/images/instagram.jpg',
                width: 200,
              ),
              RaisedButton(
                onPressed: () {
                  Navigator.of(context).pushNamed('/produtos');
                  Navigator.of(context).pushNamedAndRemoveUntil(
                    '/produtos',
                    ModalRoute.withName('/'),
                  );
                },
                child: Text('Produtos'),
              ),
              RaisedButton(
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => CategoriasPage(),
                    ),
                  );
                },
                child: Text('Categorias'),
              ),
              RaisedButton(
                onPressed: () async {
                  print('Antes de navegar');
                  final idPessoa = await Navigator.of(context).push<int>(
                    MaterialPageRoute(
                        builder: (_) => PessoaPage(),
                        settings: RouteSettings(arguments: 2)),
                  );
                  print('Depois de navegar Id Pessoa é $idPessoa');
                },
                child: Text('Tipos de Pessoas'),
              ),
              RaisedButton(
                onPressed: () {
                  Navigator.of(context).push<int>(
                    MaterialPageRoute(
                      builder: (_) => MediaQueryPage(),
                    ),
                  );
                },
                child: Text('Media Queries'),
              ),
              RaisedButton(
                onPressed: () {
                  Navigator.of(context).push<int>(
                    MaterialPageRoute(
                      builder: (_) => ListasPage(),
                    ),
                  );
                },
                child: Text('Listas Page'),
              )
            ],
          ),
        ));
  }
}
