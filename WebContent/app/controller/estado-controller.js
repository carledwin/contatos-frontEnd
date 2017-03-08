angular.module("appContatos").controller("estadoCtrl", function($scope, $http){
			$scope.message='';
			$scope.estado={};
			$scope.show_lterar=false;
			$scope.estados=[];
			$scope.funcionalidade="Estados";
			
			function carregarTodos(){
				$http({method:"GET", url:"http://localhost:8080/estados"})
					.then(function(response){
							$scope.estados = response.data;
						}, 
						 function(response){
							console.log("Erro ao tentar carregar todos estados.");
						});
			};
			
			$scope.estados=carregarTodos();
			
			$scope.adicionar=function(){
				$scope.estados.push($scope.estado);
				$scope.estado={};
				$scope.message="Cadastrado realizado com sucesso!";
				show_lterar=false;
			};

			$scope.excluir=function(estado){
				$scope.estados.splice($scope.estados.indexOf(estado),1);
				$scope.message="Exclusão realizada com sucesso!";
			};

			$scope.editar=function(estado){
				$scope.show_lterar = true;
				$scope.estado=angular.copy(estado);
				$scope.estado.index = $scope.estados.indexOf(estado);
			};

			$scope.alterar=function(estado){
				$scope.estados[$scope.estado.index] = estado;
				$scope.estado={};
				$scope.message="Alteração realizada com sucesso!";
				$scope.show_lterar = false;
			};
			
		});