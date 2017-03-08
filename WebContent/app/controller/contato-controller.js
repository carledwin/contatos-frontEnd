angular.module("appContatos").controller("contatosCtrl", function($scope, $http){
			$scope.message='';
			$scope.contato={};
			$scope.show_lterar=false;
			$scope.contatos =[];
			$scope.operadoras=[];
			$scope.estados=[];
			$scope.funcionalidade="Contatos";
			
			function carregarContatos(){
				$http({method:"GET", url:"http://localhost:8080/"})
					.then(function(response){
							$scope.contatos = response.data;
						}, 
						 function(response){
							console.log("Erro ao tentar carregar contatos.");
						});
			};
			
			 function carregarEstados(){
		 		$http({method:"GET", url:"http://localhost:8080/estados"})
		 			.then(function(response){
		 					$scope.estados= response.data;
		 				},
		 				 function(response){
		 					Console.log("Erro ao tentar carregar estados.");
					});
			};

			function carregarOperadoras(){
				$http({method:"GET", url:"http://localhost:8080/operadoras"})
					.then(function(response){
							$scope.operadoras = response.data;	
						},
						 function(response){
							Console.log("Erro ao tentar carregar operadoras.");	
						});
			};
			
			$scope.contatos=carregarContatos();
			$scope.estados=carregarEstados();
			$scope.operadoras=carregarOperadoras();
			
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
			};

			$scope.alterar=function(contato){
				$scope.contatos[$scope.contato.index] = contato;
				$scope.contato={};
				$scope.message="Contato alterado com sucesso!";
				$scope.show_lterar = false;
			};
			
		});