angular.module("appContatos").controller("contatosCtrl", function($scope){
			$scope.message='';
			$scope.contato={};
			$scope.show_lterar=false;
			$scope.contatos = [];
			$scope.app="Contatos";
		
			$scope.adicionar=function(){
				$scope.contatos.push($scope.contato);
				$scope.contato={};
				$scope.message="Contato cadastrado com sucesso!";
				show_lterar=false;
			};

			$scope.excluir=function(contato){
				$scope.contatos.splice($scope.contatos.indexOf(contato),1);
				$scope.message="Contato excluido com sucesso!";
			};

			$scope.editar=function(contato){
				$scope.show_lterar = true;
				$scope.contato=angular.copy(contato);
				$scope.contato.index = $scope.contatos.indexOf(contato);
			}

			$scope.alterar=function(contato){
				$scope.contatos[$scope.contato.index] = contato;
				$scope.contato={};
				$scope.message="Contato alterado com sucesso!";
				$scope.show_lterar = false;
			};

			
		});