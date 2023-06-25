import 'package:app_cadastro/routes/app_routes.dart';
import 'package:flutter/material.dart';
import '../Widgets/user_tile.dart';
import 'package:provider/provider.dart';
import '../provider/users.dart';
import 'package:app_cadastro/models/user.dart';

class UserList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Users users = Provider.of(context);
    return Scaffold(
        appBar: AppBar(
          title: Text('Lista de usuário'),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.add),
              onPressed: () {
                Navigator.of(context).pushNamed(AppRoutes.USER_FORM);
              },
            ),
          ],
        ),
        body: ListView.builder(
          itemCount: users.count,
          itemBuilder: (ctx, i) => UserTile(users.byIndex(i)),
        ));
  }
}
