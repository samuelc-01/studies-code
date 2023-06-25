import 'package:flutter/material.dart';

class PessoaPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutuante'),
      ),
      body: Container(
        child: Center(
          child: FlatButton(
            child: Text('Voltar ${ModalRoute.of(context)!.settings.arguments}'),
            onPressed: () {
              Navigator.pop(context, 1);
            },
          ),
        ),
      ),
    );
  }
}
