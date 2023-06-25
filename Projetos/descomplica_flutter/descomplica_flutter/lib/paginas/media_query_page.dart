import 'package:flutter/material.dart';

class MediaQueryPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final appBar = AppBar(
      title: Text('${MediaQuery.of(context).size.height}'),
    );
    return Scaffold(
      appBar: appBar,
      body: Column(
        children: [
          Container(
            width: MediaQuery.of(context).size.width,
            height: (MediaQuery.of(context).size.height -
                appBar.preferredSize.height -
                MediaQuery.of(context).padding.top),
            color: Colors.red,
          )
        ],
      ),
    );
  }
}
