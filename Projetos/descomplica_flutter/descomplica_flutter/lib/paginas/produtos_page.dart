import 'package:flutter/material.dart';

class ProdutosPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Produtos'),
      ),
      body: Container(
        child: FlatButton(
          onPressed: () {
            Navigator.of(context).pushNamedAndRemoveUntil(
              '/categorias',
              ModalRoute.withName('/'),
            );
          },
          child: Text('Fechar tela'),
        ),
      ),
    );
  }
}
