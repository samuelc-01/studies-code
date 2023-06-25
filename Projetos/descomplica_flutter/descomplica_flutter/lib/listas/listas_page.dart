import 'package:flutter/material.dart';

class ListasPage extends StatelessWidget {
  // Column, Row, ListView são componetes que recebem varios filhos.
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Listas'),
      ),
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text('Componente 1'),
            Text('Componente 2'),
            Text('Componente 3'),
          ],
        ),
      ),
    );
  }
}
