angular.module("appContatos").controller("operadoraCtrl", function($scope, $http){
			$scope.message='';
			$scope.operadora={};
			$scope.show_lterar=false;
			$scope.operadoras=[];
			$scope.funcionalidade="Operadoras";
			
			function carregarTodos(){
				$http({method:"GET", url:"http://localhost:8080/operadoras"})
					.then(function(response){
							$scope.operadoras = response.data;
						}, 
						 function(response){
							console.log("Erro ao tentar carregar operadoras.");
						});
			};
						
			$scope.operadoras=carregarTodos();
			
			$scope.adicionar=function(){
				$scope.operadoras.push($scope.operadora);
				$scope.operadora={};
				$scope.message="Cadastrado realizado com sucesso!";
				show_lterar=false;
			};

			$scope.excluir=function(operadora){
				$scope.operadoras.splice($scope.operadoras.indexOf(operadora),1);
				$scope.message="Exclução realizada com sucesso!";
			};

			$scope.editar=function(operadora){
				$scope.show_lterar = true;
				$scope.operadora=angular.copy(operadora);
				$scope.operadora.index = $scope.operadoras.indexOf(operadora);
			};

			$scope.alterar=function(operadora){
				$scope.operadoras[$scope.operadora.index] = operadora;
				$scope.operadora={};
				$scope.message="Alteração realizada com sucesso!";
				$scope.show_lterar = false;
			};
			
		});